import bcrypt from "bcryptjs"

export const users =[
    {
        name: "Debanjan Das",
        email: "debanjan@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
    {
        name: "Manas Vishwakarma",
        email: "manas@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
]