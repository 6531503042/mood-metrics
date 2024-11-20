from transformers import pipeline
from typing import List, Dict, Union

class SentimentAnalyzerService:
    def __init__(self, model_name: str = "nlptown/bert-base-multilingual-uncased-sentiment"):
        """Initialize the sentiment analyzer service"""
        try:
            self.analyzer = pipeline('sentiment-analysis', model=model_name)
            self.sentiment_map = {
                '1 star': 'NEGATIVE',
                '2 stars': 'NEGATIVE',
                '3 stars': 'NEUTRAL',
                '4 stars': 'POSITIVE',
                '5 stars': 'POSITIVE'
            }
        except Exception as e:
            raise Exception(f"Failed to initialize sentiment analyzer: {e}")

    def analyze_text(self, text: str) -> Dict[str, Union[str, float]]:
        """Analyze sentiment of a single text"""
        try:
            result = self.analyzer(text)[0]
            mapped_sentiment = self.sentiment_map[result['label']]
            return {
                'text': text,
                'label': mapped_sentiment,
                'score': round(result['score'], 4)
            }
        except Exception as e:
            raise Exception(f"Error analyzing text: {e}")

    def analyze_batch(self, texts: List[str]) -> List[Dict[str, Union[str, float]]]:
        """Analyze sentiment of multiple texts"""
        try:
            results = self.analyzer(texts)
            return [
                {
                    'text': text,
                    'label': self.sentiment_map[result['label']],
                    'score': round(result['score'], 4)
                }
                for text, result in zip(texts, results)
            ]
        except Exception as e:
            raise Exception(f"Error analyzing batch texts: {e}") 