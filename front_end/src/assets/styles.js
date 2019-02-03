export const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#1F5DB5",
    textAlign: "center",
    height: "10vh",
    [theme.breakpoints.down(415)]: {
      width: "120vw",
    },
  },
  typo: {
    color: "white",
    textAlign: "center",
    marginLeft: "35%",
    fontSize: "2rem",
    [theme.breakpoints.down(415)]: {
      width: "100%",
      fontSize: "1rem",
      marginLeft: "5%",
      marginBottom: '1rem'
    },
    [theme.breakpoints.only('sm')]: {
      width: "100%",
      fontSize: "1.6rem",
      marginLeft: "3%",
      marginBottom: '1rem',
      textAlign: "center",
    },
    [theme.breakpoints.down(600)]: {
      width: "100%",
      fontSize: "1.6rem",
      marginLeft: "3%",
      marginBottom: '1rem',
      textAlign: "center",
    },
    [theme.breakpoints.only('sm')]: {
      width: "100%",
      fontSize: "1.7rem",
      marginLeft: "3%",
      marginBottom: '2rem',
      textAlign: "center",
    },
    [theme.breakpoints.only('md')]: {
      color: "white",
      textAlign: "center",
      marginLeft: "28%",
      fontSize: "2rem",
    },
    [theme.breakpoints.only('lg')]: {
      marginLeft: "27%",
      marginBottom: '0.1rem',
    },
  },
  typo2: {
    display: "block",
    color: "white",
    marginLeft: "33%",
    fontSize: "2rem",
    marginBottom: "2rem",
    [theme.breakpoints.down(415)]: {
      width: "100%",
      fontSize: "1rem",
      marginLeft: "5%",
      marginBottom: '4rem'
    },
    [theme.breakpoints.only('sm')]: {
      width: "100%",
      fontSize: "1.8rem",
      marginLeft: "3%",
      marginBottom: '2rem',
      textAlign: "center",
    },
    [theme.breakpoints.only('md')]: {
      color: "white",
      textAlign: "center",
      marginLeft: "30%",
      fontSize: "1.5rem",
    },
    [theme.breakpoints.only('lg')]: {
      marginLeft: "23%",
    },
  },
  paper: {
    height: "110vh",
    width: "50vw",
    margin: "1rem auto",
    backgroundColor: "#F9FDFF",
    [theme.breakpoints.down("xs")]: {
      height: "205vh"
    },
    [theme.breakpoints.only("sm")]: {
      height: "125vh",
      width: '80vw'
    },
    [theme.breakpoints.down(897)]: {
      height: "205vh"
    },
    [theme.breakpoints.only("md")]: {
      height: "90%",
      width: "75vw"
    },
    [theme.breakpoints.only("lg")]: {
      height: "100%",
      width: "75vw"
    },
    [theme.breakpoints.down(415)]: {
      height: "100%",
      width: "120%"
    }
  },
  paper_typo: {
    backgroundColor: "#D1495B"
  },
  paper_typo_alert: {
    color: "#fff"
  },
  paper_div: {
    textAlign: "center"
  },
  textField: {
    width: "15rem",
    marginLeft: "1rem"
  },
  paper_div2: {
    marginTop: "3rem",
    textAlign: "center"
  },
  paper_div3: {
    marginTop: "1.5rem",
    textAlign: "center",
    backgroundColor: "#74BD7C",
  },
  menu: {
    width: 200
  },
  textArea: {
    height: "4rem"
  },
  textArea2: {
    height: "4rem"
  },
  formLabel: {
    [theme.breakpoints.down("xs")]: {
      width: "1rem",
      marginLeft: "-6.5rem",
      textAlign: "center"
    }
  },
  formGroup: {
    marginLeft: "4rem",
    [theme.breakpoints.down("xs")]: {
      width: "1rem",
      margin: "0 auto",
      textAlign: "center"
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: ".1rem"
    },
    [theme.breakpoints.down(897)]: {
      marginLeft: "10rem"
    },
    [theme.breakpoints.only("md")]: {}
  },
  resources_container: {
    display: "flex",
    [theme.breakpoints.down(897)]: {
      display: "block"
    }
  },
  btn: {
    marginLeft: "45%",
    height: "3rem",
    width: "8rem",
    marginTop: "2rem",
    borderRadius: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "30%"
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "40%"
    },
    [theme.breakpoints.only("xl")]: {
      marginLeft: "42%"
    },
    [theme.breakpoints.only("md")]: {
      marginBottom: "3%"
    },
    [theme.breakpoints.only("lg")]: {
      marginBottom: "5%"
    },
    [theme.breakpoints.down(415)]: {
      marginBottom: "5%"
    }
  }
});
