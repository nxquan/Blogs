module.exports = {
    convertOneObject(object) {
        return object ? object.toObject() : object;
    },
    convertMultiObject(objects) {
        return objects.map((object) => object.toObject());
    },
};
