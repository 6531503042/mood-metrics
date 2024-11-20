from datetime import datetime
from typing import List, Dict
import gc
import os

from utils.model_loader import load_sentiment_analyzer, load_category_models
from services.sentiment_service import SentimentService
from services.categorization_service import CategorizationService
from services.priority_service import PriorityService

class FeedbackAnalyzer:
    def __init__(self):
        try:
            # Set memory efficient settings
            os.environ['PYTORCH_CUDA_ALLOC_CONF'] = 'max_split_size_mb:512'
            
            # Determine device
            self.device = 'cpu'  # Force CPU usage for stability
            
            # Initialize services
            sentiment_analyzer = load_sentiment_analyzer(self.device)
            tokenizer, model = load_category_models(self.device)
            
            self.sentiment_service = SentimentService(sentiment_analyzer)
            self.categorization_service = CategorizationService(tokenizer, model, self.device)
            self.priority_service = PriorityService()
            
        except Exception as e:
            print(f"Error initializing FeedbackAnalyzer: {str(e)}")
            raise

    def process_feedback(self, feedback: str) -> Dict:
        try:
            # Analyze sentiment
            sentiment_result = self.sentiment_service.analyze(feedback)
            
            # Categorize feedback
            categories = self.categorization_service.categorize(feedback)
            
            # Determine priority
            priority = "low"
            if categories:
                priority = self.priority_service.determine_priority(
                    feedback,
                    sentiment_result['confidence'],
                    categories[0]['category']
                )

            result = {
                'feedback': feedback,
                'sentiment': sentiment_result['sentiment'],
                'sentiment_confidence': sentiment_result['confidence'],
                'categories': categories,
                'priority': priority,
                'processed_at': datetime.now().isoformat()
            }
            
            # Clear memory
            gc.collect()
            return result
            
        except Exception as e:
            print(f"Error processing feedback: {str(e)}")
            return {
                'feedback': feedback,
                'error': str(e),
                'processed_at': datetime.now().isoformat()
            }

    def process_feedback_batch(self, feedbacks: List[str]) -> List[Dict]:
        return [self.process_feedback(feedback) for feedback in feedbacks]

def main():
    try:
        # Initialize the analyzer
        analyzer = FeedbackAnalyzer()
        
        # Example feedback
        sample_feedbacks = [
            "The work environment is very stressful and management doesn't listen to our concerns.",
            "I love the team collaboration and the positive company culture.",
            "The compensation package needs improvement, but work-life balance is good."
        ]
        
        # Process feedback
        results = analyzer.process_feedback_batch(sample_feedbacks)
        
        # Print results
        for result in results:
            if 'error' in result:
                print(f"\nError processing feedback: {result['error']}")
            else:
                print("\nFeedback:", result['feedback'])
                print("Sentiment:", result['sentiment'])
                print("Categories:", [cat['category'] for cat in result['categories']])
                print("Priority:", result['priority'])
                
    except Exception as e:
        print(f"Error in main: {str(e)}")

if __name__ == "__main__":
    main()
