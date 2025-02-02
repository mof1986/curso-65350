import speech_recognition as sr

def convert_audio_to_text(): 
    r = sr.Recognizer() 
    with sr.Microphone() as source: 
        print("Speak something...") 
        audio = r.listen(source) 
        try: 
            text = r.recognize_google(audio) 
            return text 
        except sr.UnknownValueError: 
            print("Unable to recognize speech.") 
        except sr.RequestError as e: 
            print("Error:", e) 

audio_text = convert_audio_to_text() 
if audio_text: 
    print("You said:", audio_text)
