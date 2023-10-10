
const compulsorySubject = ['English','Nepali']

export const courseList = {
    NEB : {
        Science : {
            'Mathematics Group' : compulsorySubject.concat(['Mathematics','Physics','Chemistry','Computer']),
            'Biology Group' : compulsorySubject.concat(['Mathematics','Physics','Chemistry','Biology']),
            'Biology (With out Mathematics)' : compulsorySubject.concat(['Social','Physics','Chemistry','Biology']),
        },
        Management : {
            'Management Group 1' : compulsorySubject.concat(['Mathematics','Account','Economic','Computer']),
            'Management Group 2' : compulsorySubject.concat(['Mathematics','Account','Economic','Biology']),
            'Management (With out Mathematics)' : compulsorySubject.concat(['Social','Economic','Account','Finance']),
        },
        LAW : {
            'LAW Subject list' : compulsorySubject.concat(['One','Two','Three','Four']),
        }
    },
    CTEVT : {
        HA : {
            'HA Subject list' : compulsorySubject.concat(['One','Two','Three','Four']),
        },
        GA : {
            'GA Subject list' : compulsorySubject.concat(['One','Two','Three','Four']),
        }
    },
    UPSC : {
        PA : {
            'PA Subject list' : compulsorySubject.concat(['One','Two','Three','Four']),
        }
    },
}

export const boardLists = Object.keys(courseList)

// console.log(boardLists)

