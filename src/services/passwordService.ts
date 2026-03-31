export default function generatePass(length=8){
    let password:string = ''
    let characters:string = 'kF7#vQ2!xL9@pR8Zt&3mA$yW1^cH!P4sD9@uXq7#BnrT6*Lz2%VgH8!KQ9@fE3!xWm7&Jp2^kB!a7Z#R4vYnXc8@M!3pL6$TqR7!dFq2@Zy9#KbWpR4&N!x7J3^mVcH2@tL9!sQ#8aXf'

    for (let index = 0; index < length; index ++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password;
}