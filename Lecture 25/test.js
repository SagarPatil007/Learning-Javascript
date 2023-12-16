// Global execution context (this)
// function execution context
// eval execution context

//  {} => memory creation phase
//     => execution phase

// step :
    // 1) global phase
        // this

    // 2) memory phase
        // val1 = undefined 
        // val2 = undefined
        // addNum = defination
        // result1 = undefined
        // result2 = undefined

    // 3) excution phase
        // val1 = 5
        // val2 = 10
        // addNum => {new variable env + excution thread} => (memory phase + execution phase)

// callstack
    // |            |
    // |            |
    // |            |
    // |            |
    // |            |
    // | global exe |
    // --------------