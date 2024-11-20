from sentiment_service import SentimentAnalyzerService

def test_sentiments():
    try:
        sentiment_service = SentimentAnalyzerService()

        # Test cases for different sentiments
        test_cases = {
            "Positive": [
                "I absolutely love this product, it's amazing!",
                "The service was exceptional and made my day better.",
                "This is the best experience I've ever had!",
                "I'm so happy with the results!",
                "The team did an outstanding job on this project."
            ],
            "Neutral": [
                "It's okay, nothing special.",
                "The product works as expected.",
                "I have mixed feelings about this.",
                "It could be better, but it's not bad.",
                "The experience was average."
            ],
            "Negative": [
                "This is terrible and disappointing.",
                "I wouldn't recommend this to anyone.",
                "The worst service I've ever received.",
                "Complete waste of time and money.",
                "Very frustrated with this experience."
            ]
        }

        # Test each category
        for sentiment_type, texts in test_cases.items():
            print(f"\n=== Testing {sentiment_type} Sentiments ===")
            results = sentiment_service.analyze_batch(texts)
            
            for result in results:
                print(f"\nText: {result['text']}")
                print(f"Detected Sentiment: {result['label']}")
                print(f"Confidence Score: {result['score']:.4f}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    test_sentiments()
