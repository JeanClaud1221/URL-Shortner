package com.shortUrl.Short.Service;

import com.shortUrl.Short.Model.User;
import com.shortUrl.Short.Repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository repository;
    @PostConstruct
    public void cleardb(){
        repository.deleteAll();
        System.out.println("Database cleared");
    }
    public void AddUser(User u){
        User usr=repository.findByoriginal(u.getOriginal());
        if(usr==null){
            repository.save(u);
        }
    }
    public List<User> getUsers(){
        return repository.findAll();
    }
    public String getShort(String s){
        User u= repository.findByoriginal(s);
        return u.getShortened();
    }
    public String getLong(String s){
        User u=repository.findByshortened(s);
        return u.getOriginal();
    }

}
