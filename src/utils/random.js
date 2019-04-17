export default {
    rand(min, max) {
        let range = max - min;
        let seed = Math.random() * Date.now();
        return seed % range + min;
    }
};
