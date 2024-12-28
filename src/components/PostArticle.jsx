import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getAllTopics, postNewArticle } from "../utils/api"
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography} from "@mui/material";
import LoadingCircularProgress from "./Loading/CircularLoading";

export function WriteArticle(){
    const {loggedIn}= useContext(UserContext)

    const navigate = useNavigate();

    const [topics, setTopics] = useState([])
    const [formData, setFormData] = useState({
        title: "",
        topic: "",
        author: loggedIn.username,
        body: "",
        imageUrl: "",
      });

    useEffect(() => {
      getAllTopics()
      .then((data)=> {
        setTopics(data)
      })
      .catch((err) =>{
        console.log(err)
      })
    }, [])
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
      };

    const handleSubmit = () => {
        if(!loggedIn.username) {
          navigate("/users/login")
        }
        else {
              postNewArticle(formData)
              .then(() => {})
              .catch((err) =>{
                console.log(err)
              })
            navigate('/')
        }
      }


        return ( <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "12px",
              padding: "15px",
            }}
          >
            <Typography variant="h4" gutterBottom style={{marginBottom: "20px"}}>
              Write An Article
            </Typography>
            {!loggedIn.username ? <p style={{ color: "red"}}>Please log in before submitting an article</p> : null}
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "45px",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
                autoFocus
              />
      
              <FormControl fullWidth required>
                <InputLabel id="topic-label">Topic</InputLabel>
                <Select
                  labelId="topic-label"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                >
                  {topics.map((topic) => (
                    <MenuItem key={topic.slug} value={topic} sx={{fontSize: "18px"}}>
                      {topic.slug.slice(0,1).toUpperCase() + topic.slug.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label="Body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
              />
      
              <TextField
                label="Article Image URL"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                fullWidth
              />
      
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </form>
          </Box>
        )
}
