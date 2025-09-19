'use client'
export const LocalStorageEventTarget = new EventTarget();

export const setAccessTokenToLS = (access_token: string) => {
    if (typeof window !== 'undefined') return localStorage.setItem("access_token", access_token);
    return ""
};



export const clearLS = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("profile");
        const clearLSEvent = new Event("clearLS");
        LocalStorageEventTarget.dispatchEvent(clearLSEvent);
        // console.log("emit event logout");
    }
};

export const getAccessTokenFromLS = () => {
    if (typeof window !== 'undefined') return localStorage.getItem("access_token") || "";
    return
}



/**
 * Nếu không thể JSON parse sẽ mặc định trả về ""
 * <=> Chưa đăng nhâp
 */
export const getProfileFromLS = () => {
    const result = (typeof window !== 'undefined') ? localStorage.getItem("profile") || "" : "";
    try {
        return result ? JSON.parse(result) : null;
    } catch (error) {
        return "";
    }
};

export const setProfileToLS = (profile: any) => {
    if (typeof window !== 'undefined') localStorage.setItem("profile", JSON.stringify(profile));
};
