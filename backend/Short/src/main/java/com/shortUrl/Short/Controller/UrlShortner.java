package com.shortUrl.Short.Controller;

import com.shortUrl.Short.Model.Request;
import com.shortUrl.Short.Model.Response;
import com.shortUrl.Short.Model.User;
import com.shortUrl.Short.Service.UserService;
import com.shortUrl.Short.Utility.Encoder;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
@RequestMapping()
@CrossOrigin("http://localhost:5173")
public class UrlShortner {
    @Autowired
    UserService service;

    @PostMapping("/save")
    public Response Test(@RequestBody Request u){
        User user=new User(u.getData(), Encoder.generateShort(u.getData()));
        service.AddUser(user);
        return new Response("http://localhost:8080/g/"+user.getShortened());

    }
    @GetMapping("/GetUsers")
    public List<User> getallUsers(){
        return service.getUsers();
    }
    @GetMapping("/g/{url}")
    public RedirectView getShortUrl(@PathVariable String url){
        return new RedirectView(service.getLong(url));
    }
}
