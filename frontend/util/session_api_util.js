export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: "api/users",
        data: { user },
    })
);

export const sign_in = (user) => (
    $.ajax({
        method: "POST",
        url: "api/session",
        data: { user },
    })
);

export const sign_out = () => (
    $.ajax({
        method: "DELETE",
        url: "api/session"
    })
);