package com.shortUrl.Short.Repository;

import com.shortUrl.Short.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByoriginal(String original);
}
