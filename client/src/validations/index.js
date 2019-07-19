const validate = (title, department, concern, attachment) => {

    let flag = 1;
    let error = {}

    if (!title.trim().length) {
        flag = 0;
        error.title = "Please Enter A Valid Complain Title";
    }
    if (!concern.trim().length) {
        flag = 0;
        error.concern = "Please Enter A Valid Complain Body";
    }
    if (!department) {
        flag = 0;
        error.department = "Please Select Department of Complain!!";
    }
    if (attachment) {
        flag=0;
        const ext = attachment.name.split('.').pop().toLowerCase();
        if (ext !== 'png' && ext !== 'jpg' && ext !== 'jpeg') {
            error.attachment = 'image format must be "PNG", "JPG" or "JPEG",';
        }
    }
    return {
        flag,
        error
    }
};

export default validate;