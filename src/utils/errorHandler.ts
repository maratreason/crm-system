module.exports = (res: any, error: any) => {
    res.status(500).json({
        success: false,
        message: error.message ? error.message : error,
    });
};
