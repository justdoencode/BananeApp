
export default function(errorCode){
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz email adresi!"
        case "auth/email-already-exists":
            return "Kullanıcı zaten kayıtlı"
        case "auth/user-not-found":
            return "Kullanıcı bulunamadı!"
        default:
            return errorCode;
    }
}