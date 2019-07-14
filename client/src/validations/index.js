// const validate = (title, department, concern, attachment) => {
//     let flag = 0;
//     if (!title.trim().length) {
//         flag = 1;
//         this.setState({
//             error: {
//                 title: "Please Enter A Valid Complain Title"
//             }
//         });
//     }
//     if (!concern.trim().length) {
//         flag = 1;
//         this.setState({
//             error: {
//                 concern: "Please Enter A Valid Complain Body"
//             }
//         });
//     }
//     if (!department) {
//         flag = 1;
//         this.setState({
//             error: {
//                 department: "Please Select Department of Complain!!"
//             }
//         })

//     }
//     if (!concern) {
//         flag = 1;
//         this.setState({
//             error: {
//                 concern: "Please Add Concern For The Complain!!"
//             }
//         })
//     }
//     if (!title) {
//         flag = 1;
//         this.setState({
//             error: {
//                 title: "Please Add Title For The Complain!!"
//             }
//         })
//     }
//     return flag;
// };

// export default validate;