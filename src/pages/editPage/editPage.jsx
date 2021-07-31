import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPost, updatePost } from "../../services/postService";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import context from "../../context";

const EditPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const { setMessageBox } = useContext(context);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    setLoading(true);
    getPost(id)
      .then((response) => setPost(response.data))
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
                    defaultValue={post.title}
                    helperText="this field is required"
                    variant="outlined"
                    onChange={(e) =>
                      setPost({ ...post, title: e.target.value })
                    }
                  />
                )}
              </FormControl>
              <FormControl fullWidth className="mt-2">
                {loading ? (
                  ""
                ) : (
                  <TextField
                    label="body"
                    defaultValue={post.body}
                    helperText="this field is required"
                    variant="outlined"
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
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
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="mt-2"
                startIcon={<SaveIcon />}
                onClick={() => {
                  updatePost(post).then(() =>
                    setMessageBox({
                      open: true,
                      severity: "success",
                      message: "changed successfully",
                    })
                  );
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

export default EditPage;
