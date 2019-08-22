package com.lambag.subscribe.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lambag.subscribe.service.model.User;

public interface UserRepository  extends JpaRepository<User, Long>{
	User findByUsername(String username);
}
