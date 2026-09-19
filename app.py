from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home(): return render_template("index.html")
@app.route("/about")
def about(): return render_template("about.html")
@app.route("/services")
def services(): return render_template("services.html")
@app.route("/products")
def products(): return render_template("products.html")
@app.route("/gallery")
def gallery(): return render_template("gallery.html")
@app.route("/contact")
def contact(): return render_template("contact.html")
@app.route("/commercial")
def commercial(): return render_template("commercial.html")

if __name__ == "__main__":
    app.run(debug=False, use_reloader=False)
