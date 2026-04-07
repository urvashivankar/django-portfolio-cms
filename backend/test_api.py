import requests

BASE_URL = "http://127.0.0.1:8000/api/"

def test_apis():
    endpoints = ['profile/', 'projects/', 'experience/', 'skills/']
    for ep in endpoints:
        print(f"Testing {BASE_URL}{ep}...")
        try:
            response = requests.get(f"{BASE_URL}{ep}")
            print(f"Status: {response.status_code}")
            if response.status_code == 200:
                print(f"Response (first 200 chars): {str(response.json())[:200]}...")
            else:
                print(f"Error: {response.text}")
        except Exception as e:
            print(f"Request failed: {str(e)}")

if __name__ == "__main__":
    test_apis()
