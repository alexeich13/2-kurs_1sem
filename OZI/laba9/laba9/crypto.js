
async function generateKey() {
    return window.crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 128, 
            hash: "SHA-384", 
        },
        true,
        ["encrypt", "decrypt"] 
    )
}
async function encrypt(data, key, iv) {
    return window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
            tagLength: 128, 
        },
        key, 
        data 
    )
}
async function decrypt(data, key, iv) {
    return window.crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv, 
            tagLength: 128, 
        },
        key,
        data 
    )
}

function getRandomNumbers() {

    let array = new Uint8Array(5);
    for (let i=0; i<5; ++i) {
    console.log(crypto.getRandomValues(array));
  }

}

async function fun() {
    getRandomNumbers()
    var keys = await generateKey()
    var iv = new Uint8Array([188, 185, 57, 146, 246, 194, 114, 34, 12, 80, 198, 77])
    var enc = new TextEncoder();
    var data = enc.encode("Дрозд Алексей Игоревич")
    var encryptedData = await encrypt(data, keys, iv)
    var decryptedData = await decrypt(encryptedData, keys, iv)
    var enc = new TextDecoder("utf-8");
    document.write(enc.decode(encryptedData) + '<br>');
    document.write(enc.decode(decryptedData) + '<br>');
}
fun()

