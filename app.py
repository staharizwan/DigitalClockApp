from flask import Flask, redirect, url_for, render_template, request
#import webview
app = Flask(__name__)


@app.route("/")
def home():
    return render_template("DigitalClock.html")

#webview.create_window('DigitalClock', app)

if __name__ == "__main__":
    app.run(debug=True)
    #webview.start()