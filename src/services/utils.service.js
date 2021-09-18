class Utils {
    getRandomNumbers() {
        var today = new Date().toLocaleDateString().toString();
        var now = today.split('/').join('');
    
        var val = Math.floor(10000 + Math.random() * 9000);
        // comment console console.log("ini today"+now);
        // comment console console.log(val)
        var randomNumber = now + val.toString();
    
        return randomNumber
    }

    
    formValidation(idForm,characterAllow) {
        document.getElementById(idForm).onkeypress = function (e) {
            var chr = String.fromCharCode(e.which);
            if (characterAllow.indexOf(chr) < 0) return false;
        };
    }
}
  
export default new Utils();