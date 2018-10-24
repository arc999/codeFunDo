




from flask import Flask, render_template

from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'   


db = SQLAlchemy(app)

class Location(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	lat = db.Column(db.Float, unique = True)
	longt = db.Column(db.Float, unique = True)
	rating = db.Column(db.Integer, default= "3")
    

def __repr__(self):
	return f"Location('{self.lat}','{self.longt}','{self.rating}'')"






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

