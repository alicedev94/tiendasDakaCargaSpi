const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const sequelize = require("../../../lib/sequelize");
const bcrypt = require("bcrypt-nodejs");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await sequelize.models.modelMasterUsers.findByPk(id);
  done(null, user);
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = await sequelize.models.modelMasterUsers.findOne({
        where: { email: email },
      });
      console.log(user);
      if (user) {
        return done(
          null,
          false,
          console.log("The Email is already Taken.")
          //req.flash("signupMessage", "The Email is already Taken.")
        );
      } else {
        const newUser = await sequelize.models.modelMasterUsers.create({
          email: email,
          password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        });
        console.log(newUser);
        done(null, newUser);
      }
    }
  )
);

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await sequelize.models.modelMasterUsers.findOne({
          where: { email: email },
        });
        if (!user) {
          return done(null, false, console.log("No User Found.")); //  req.flash("signinMessage", "No User Found")
        }
        try {
          bcrypt.compare(
            password,
            user.dataValues.password,
            function (err, result) {
              if (err) {
                console.error(err);
              } else {
                console.log(result);
                if (result) {
                  return done(null, user);
                } else {
                  return done(
                    null,
                    false,
                    //req.flash("signinMessage", "Invalid Password")
                    console.log("No User Found")
                  );
                }
              }
            }
          );
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    }
  )
);
