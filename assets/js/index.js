const secretKey = "miClaveSecreta123"; // Clave secreta para el cifrado

        function encryptText() {
            const inputText = document.getElementById('inputText').value;
            const encryptedText = CryptoJS.AES.encrypt(inputText, secretKey).toString();
            document.getElementById('outputText').textContent = encryptedText;
        }

        function decryptText() {
            const encryptedText = document.getElementById('inputText').value;
            const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
            document.getElementById('outputText').textContent = decryptedText;
        }