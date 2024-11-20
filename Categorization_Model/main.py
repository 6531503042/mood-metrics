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
        
        # Comprehensive test feedback data
        sample_feedbacks = [
            # Work Environment
            "The office is too noisy and the air conditioning is always too cold, making it difficult to concentrate.",
            "Our new open office layout has greatly improved collaboration between teams.",
            "The workplace safety protocols are outdated and need immediate attention.",
            
            # Management
            "My manager provides clear guidance and regular constructive feedback.",
            "Upper management seems disconnected from day-to-day operations and employee concerns.",
            "The leadership team's communication has been inconsistent regarding company direction.",
            
            # Compensation
            "The salary is below market rate and the bonus structure is unclear.",
            "Recent improvements to our healthcare benefits are greatly appreciated.",
            "The stock options program is competitive, but the base salary needs review.",
            
            # Work-life Balance
            "The flexible working hours have helped me maintain a better work-life balance.",
            "Constant after-hours meetings are affecting my personal time and mental health.",
            "The unlimited PTO policy is great, but there's subtle pressure not to use it.",
            
            # Career Growth
            "There are limited opportunities for advancement within my department.",
            "The professional development program and learning resources are excellent.",
            "I appreciate the mentorship program, but need more structured career planning.",
            
            # Team Collaboration
            "Cross-team communication is poor and causes project delays.",
            "Our team's weekly sync meetings have improved project coordination significantly.",
            "The new project management tools have streamlined our collaboration.",
            
            # Company Culture
            "The company values are well-defined but not practiced in daily operations.",
            "I love how the company celebrates diversity and promotes inclusion.",
            "The recent changes to company policies have negatively impacted morale.",
            
            # Tools and Resources
            "Our software licenses are often expired, causing workflow disruptions.",
            "The new IT support system is responsive and helpful.",
            "We need better training resources for the new tools being implemented.",
            
            # Mixed Categories
            "While the pay is good, the work-life balance is terrible and management is unresponsive.",
            "Great team culture and collaboration, but outdated tools slow us down.",
            "The office environment is excellent, but career growth opportunities are limited.",
            "Management is supportive, however, the compensation is below industry standards.",
            "The company culture is positive, but we need better project management tools."
        ]
        
        # Process feedback
        results = analyzer.process_feedback_batch(sample_feedbacks)
        
        # Print results with more detailed formatting
        for i, result in enumerate(results, 1):
            if 'error' in result:
                print(f"\nError processing feedback {i}: {result['error']}")
            else:
                print("\n" + "="*80)
                print(f"Feedback {i}:")
                print("-"*40)
                print("Text:", result['feedback'])
                print("Sentiment:", result['sentiment'])
                print("Confidence:", f"{result['sentiment_confidence']:.2%}")
                print("Categories:", [f"{cat['category']} ({cat['confidence']:.2%})" 
                                   for cat in result['categories']])
                print("Priority:", result['priority'].upper())
                print("Processed at:", result['processed_at'])
                
    except Exception as e:
        print(f"Error in main: {str(e)}")

if __name__ == "__main__":
    main()
