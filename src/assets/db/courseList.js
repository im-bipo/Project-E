

export const courseList = {
    NEB : {
        Science : {
            'Mathematics Group' : ['English','Nepali','Mathematics','Physics','Chemistry','Computer'],
            'Biology Group' : ['English','Nepali','Mathematics','Physics','Chemistry','Biology'],
            'Biology (With out Mathematics)' : ['English','Nepali','Social','Physics','Chemistry','Biology'],
        },
        Management : {
            'Management Group 1' : ['English','Nepali','Mathematics','Account','Economic','Computer'],
            'Management Group 2' : ['English','Nepali','Mathematics','Account','Economic','Biology'],
            'Management (With out Mathematics)' : ['English','Nepali','Social','Economic','Account','Finance'],
        },
        LAW : {
            'LAW Subject list' : ['English','Nepali','One','Two','Three','Four'],
        }
    },
    CTEVT : {
        HA : {
            'HA Subject list' : ['English','Nepali','One','Two','Three','Four'],
        },
        GA : {
            'GA Subject list' : ['English','Nepali','One','Two','Three','Four'],
        }
    },
    UPSC : {
        PA : {
            'PA Subject list' : ['English','Nepali','One','Two','Three','Four'],
        }
    },
}

export const boardLists = Object.keys(courseList)

// console.log(boardLists)

