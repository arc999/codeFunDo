from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def main():
	return render_template('index.html')


@app.route('/safeZone')
def safeZone():
 	return render_template('safe_zone.html')


@app.route('/destinationReached')
def destinationReached():
 	return render_template('destination_reached.html')

 








if __name__ == "__main__" :
	app.run()

