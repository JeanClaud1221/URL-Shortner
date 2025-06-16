package com.shortUrl.Short.Controller;

import com.shortUrl.Short.Model.User;
import com.shortUrl.Short.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping()
public class UrlShortner {
    @Autowired
    UserService service;

    @PostMapping("/save")
    public String Test(@RequestBody User u){
        service.AddUser(u);
        return "user saved";

    }
    @GetMapping("/GetUsers")
    public List<User> getallUsers(){
        return service.getUsers();
    }
    @GetMapping("/test")
    public String tester(){
        return "hello there";
    }
    @GetMapping("/g/{url}")
    public String getShortUrl(@PathVariable String url){
        return service.getShort(url);
    }
}
