package com.lambag.subscribe.service.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.lambag.subscribe.service.model.User;

public interface UserDAO extends CrudRepository<User, Long> {
	public List<User> findByUsernameLike(String name);
	
}
