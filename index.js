module.exports = async function (context, req) {
    context.log('Function Triggered...');

    if (req.body) {
        let score = Number(req.body)
        context.log(`Sentiment score received ${score}`);

        let category = "EXCELLENT";
        if (score < 0.3) {
            category = "BAD";
        } else if (score < 0.5) {
            category = "OK";
        } else if (score < 0.8) {
            category = "GOOD";
        }

        context.res = {
            status: 200,
            body: category
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please send the sentiment score in the request body"
        };
    }
};
