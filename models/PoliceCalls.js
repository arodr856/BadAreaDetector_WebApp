const AWS = require('ibm-cos-sdk');
const {cloudObjectStorageConfig} = require('../keys/keys');
const cos = new AWS.S3(cloudObjectStorageConfig);

exports.getItem = (bucketName, itemName, callback) => {
    console.log(`Retrieving item from bucket: ${bucketName}, key: ${itemName}`);
    return cos.getObject({
        Bucket: bucketName,
        Key: itemName
    }).promise()
        .then((data) => {
            if (data != null) {
                callback(null, Buffer.from(data.Body).toString());
            }
        })
        .catch((e) => {
            console.error(`ERROR: ${e.code} - ${e.message}\n`);
            callback(e, null);
        });
}