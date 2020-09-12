/**
 *
 * LoginPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  Grid,
  Button,
  Card,
  CardContent,
  InputBase,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Person as PersonIcon,
  VpnKey as PasswordIcon,
  ArrowForward as ArrowIcon,
} from '@material-ui/icons';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Logo from 'components/Logo';
import Dump from 'components/Dump';
import bgImage from 'images/bg.jpg';

import Alert from 'components/Alert';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loginAction, loginReinitAction } from './actions';

// TODO cahnge to styled component
// TODO add AuthLayout
const useStyles = makeStyles({
  wrapper: {
    maxWidth: 400,
    margin: 16,
    backgroundImage: `url(${bgImage})`,
  },
  actionArea: {
    borderBottom: '1px solid #eee',
    padding: '25px 16px',
  },
  label: {
    height: '30px',
    lineHeight: '30px',
  },

  logo: {
    marginTop: '20px',
    marginBottom: '40px',
  },

  backButton: {
    marginBottom: '16px',
    display: 'inline-block',
    paddingRight: 20,
  },
  arrowIcon: {
    fontSize: '14px',
    marginLeft: '10px',
    display: 'inline-block',
    height: '20px',
    position: 'absolute',
    right: 5,
  },

  formInput: {
    padding: '0 2px',
    display: 'flex',
    minWidth: '100%',
    alignItems: 'center',
    height: 28,
    marginTop: 8,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  divider: {
    width: 1,
    height: 20,
    margin: 4,
  },
  link: {
    cursor: 'pointer',
  },
  inputIcon: {
    color: '#ccc',
    marginLeft: 8,
  },
  loginBtn: {
    fontFamily: 'IRANSansWeb',
  },
});

export function LoginPage({ data, onLoginSubmit, onHideError }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  // TODO مقادیر اولیه رو پاک کن
  const [username, setUsername] = useState('user1@aparat.me');
  const [password, setPassword] = useState('123456');

  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Helmet>
        <title>login page</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>

      <Grid item xs={12} className={classes.wrapper}>
        <Grid item xs={12}>
          <Logo className={classes.logo} />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="outlined"
            size="small"
            className={`${classes.backButton} ${classes.loginBtn}`}
          >
            <ArrowIcon className={classes.arrowIcon} />
            بازگشت
          </Button>

          <Alert
            show={!!data.error}
            message="اطلاعات وارد شده مطابقت ندارد"
            onClose={onHideError}
          />
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Grid container className={classes.actionArea}>
              <Grid item xs={12} sm={8}>
                <span className={classes.label}>
                  اگر در آپارات حساب کاربری ندارید، ثبت نام کنید:
                </span>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Button
                  className={classes.loginBtn}
                  variant="contained"
                  color="secondary"
                  size="small"
                  fullWidth
                >
                  ایجاد حساب کاربری
                </Button>
              </Grid>
            </Grid>

            <CardContent className={classes.actionArea}>
              <div className={classes.label}>
                اگر در آپارات حساب کاربری دارید، وارد شوید:
              </div>

              <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="flex-end"
              >
                <Grid item xs={12} sm={9}>
                  <Paper className={classes.formInput}>
                    <PersonIcon className={classes.inputIcon} />
                    <InputBase
                      className={classes.input}
                      placeholder="موبایل یا نام کاربری یا ایمیل"
                      defaultValue={username}
                      onChange={e => setUsername(e.target.value.trim())}
                    />
                  </Paper>

                  <Paper className={classes.formInput}>
                    <PasswordIcon className={classes.inputIcon} />
                    <InputBase
                      className={classes.input}
                      placeholder="گذرواژه خود را وارد کنید"
                      defaultValue={password}
                      onChange={e => setPassword(e.target.value.trim())}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Button
                    className={classes.loginBtn}
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    onClick={() => onLoginSubmit(username, password)}
                  >
                    ورود
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dump data={data} />
    </Grid>
  );
}

LoginPage.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
  onHideError: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoginSubmit: (username, password) =>
      dispatch(loginAction(username, password)),
    onHideError: () => dispatch(loginReinitAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
