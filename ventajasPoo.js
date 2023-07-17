/* const juan1 = {

    name: "JuanDC",
    username: "juandc",
    points: 1000,
    socialMedia: {
        twitter: "fjuandc",
        facebook: "fjuandc",
        instagram: undefined
    },
    approveCourses: [
        "Curso HTML",
        "Curso practico",
    ],
    learningPaths: [
        {
            name: "Escuela desarrollo web",
            courses: [
                "Curso definitivo html",
                "Curso practico html",
                "Curso de responsive desing"
            ]
        },
        {
            name: "Escuela Videojuegos",
            courses: [
                "Uniti",
                "Unrealengine",
                "Uniti 3D"
            ]
        },
    ]
}

const miguelito1 = {
    name: "migue",
    username: "migue",
    points: 130,
    socialMedia: {
        twitter: "fmigue",
        facebook: "fmigue",
        instagram: undefined
    },
    approveCourses: [
        "Curso HTML",
        "Curso practico",
    ],
    learningPaths: [
        {
            name: "Escuela desarrollo web",
            courses: [
                "Curso definitivo html",
                "Curso de responsive desing"
            ]
        },
        {
            name: "Finanzas",
            courses: [
                "Excel",
                "Estados de cuenta",
                "Cripto"
            ]
        },
    ]
} */
class Course{
    constructor({
        name,
        clases=[]
    }){
        this.name=name;
        this.clases=clases;
    }
}

const cursoProgBasica= new Course({
    name: "Curso gratis de programacion basica", 
});

const cursoDefinitivoHTML= new Course({
    name: "Curso definitivo de html y css", 
});

const cursoPracticoHTML= new Course({
    name: "Curso practico html", 
});

class learningPath {
    constructor({
        id,
        name,
        courses = []
    }) {
        this.id =id,
        this.name =name,
        this.courses = courses
    }
}

const escuelaVgs = new learningPath({
    id:1,
    name:"Escuela de data",
    courses: [
        "Curso BI",
        "Curso Cripto"
    ]
})

const escuelaWeb = new learningPath({
    id:2,
    name:"Escuela de web",
    courses: [
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        cursoProgBasica
    ]
})


class Student1 {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram= undefined,
        facebook= undefined,
        approvedCourses = [],
        learningPaths = []
    }){
        this.name= name;
        this.email= email;
        this.username= username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses ;
        this.learningPaths = learningPaths; 
    }
}

const juan2 = new Student1({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
    ], 
})


const miguelito2 = new Student1({
    name: "migue",
    username: "migue",
    email: "migue@juanito.com",
    instagram: "fmigue",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ], 
})