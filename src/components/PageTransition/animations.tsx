export const expand = {
    initial: {
        bottom: 0
    },
    enter: (i: number) => ({    
        bottom: "100vh",
        transition: {
            duration: 0.4,
            delay: 0.3 * i,
            ease: [0.215, 0.61, 0.355, 1],
        },
        transitionEnd: { height: "0", top: "0" }
    }),
    exit: (i: number) => ({
        height: "100vh",
        transition: {
            duration: 0.5,
            delay: 0.09 * i,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
}
export const opacity = {
    initial: {
        opacity: 0.5
    },
    enter: {
        opacity: 0.8
    },
    exit: {
        opacity: 0.3,
        
    }
}