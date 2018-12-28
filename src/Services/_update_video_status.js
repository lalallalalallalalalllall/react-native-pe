module.exports = async (userId , videoId) => {

    var postBody = {
        userId : userId ,
        videoId : videoId, 
        seen : true
    }
    
    return {
        updated : "success"
    }
}