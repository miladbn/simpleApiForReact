import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost, updatePost } from "../../services/apis";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import context from "../../context";

const handleSuccess = (response, setTitle, setBody, setId, setUserId) => {
  const data = response.data;
  setTitle(data.title);
  setBody(data.body);
  setUserId(data.userId);
};

const handleFailure = (error, setMessageBox) => {
  console.log(error);
};
const EditPost = () => {
  const history = useHistory();
  const { setMessageBox } = useContext(context);
  let { id } = useParams();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState();
  useEffect(() => {
    setLoading(true);
    getSinglePost(id)
      .then((response) => handleSuccess(response, setTitle, setBody, setUserId))
      .catch((error) => handleFailure(error, setMessageBox))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Paper className="mt-10 p-10">
              <FormControl fullWidth>
                {loading ? (
                  ""
                ) : (
                  <TextField
                    label="title"
                    defaultValue={title}
                    helperText="this field is required"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                )}
              </FormControl>
              <FormControl fullWidth className="mt-2">
                {loading ? (
                  ""
                ) : (
                  <TextField
                    label="body"
                    defaultValue={body}
                    helperText="this field is required"
                    variant="outlined"
                    onChange={(e) => setBody(e.target.value)}
                  />
                )}
              </FormControl>{" "}
              <Button
                variant="contained"
                color="light"
                size="large"
                className="mt-2"
                onClick={() => history.push("/")}
              >
                cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="mt-2"
                startIcon={<SaveIcon />}
                onClick={() => {
                  updatePost(id, title, body, userId)
                    .then((response) => {
                      setMessageBox({
                        open: true,
                        severity: "success",
                        message: "changed successfully",
                      });
                    })
                    .catch((error) => console.log(error));
                }}
              >
                Save
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditPost;
