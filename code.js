fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${male}&sname=${female}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "9d2d1f59bamshf01a0af30e77394p1ad09ajsnf08aebf0435e"
	}
})
.then(response => response.json())
.then(data => {
    
})
.catch(err => {
	console.log(err);
});