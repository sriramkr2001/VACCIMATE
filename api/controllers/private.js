exports.getPrivateRoute = (req, res, next) => {
  console.log(req.user._id,"brilliant !")
  res
    .status(200)
    .json({
      success: true,
      data: req.user._id,
    });
};
