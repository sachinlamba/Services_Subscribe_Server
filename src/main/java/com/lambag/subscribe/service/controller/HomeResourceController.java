package com.lambag.subscribe.service.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lambag.subscribe.service.model.Subscribe;
import com.lambag.subscribe.service.model.User;
import com.lambag.subscribe.service.repository.SubscribeRepository;
import com.lambag.subscribe.service.repository.UserRepository;

@RestController
public class HomeResourceController {
	@Autowired
	private SubscribeRepository subscribeRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping("/")
	public String home() {
		return ("<h1>Welcome here</h1>");
	}

	@RequestMapping("/allServices")
	public List<Subscribe> subscribeList() {
		List<Subscribe> subscribes = new ArrayList<>();
		subscribeRepository.findAll()
//		.forEach(subscribes::add);
		.forEach(service -> {
			Subscribe s = new Subscribe();
			s.setId(service.getId());
			s.setName(service.getName());
			
			Set<User> users = new HashSet<User>();
			service.getUsers().forEach(user -> {
				User u = new User();
				u.setId(user.getId());
				u.setUsername(user.getUsername());
				users.add(u);
			});
			
			s.setUsers(users);
			subscribes.add(s);
		});
		return subscribes;
	}

	@RequestMapping(method=RequestMethod.POST, value="/allServices")
	public void allService(@RequestBody Subscribe service) {
		System.out.println("new service subscribe request details" + service);
		Subscribe s = new Subscribe();
//		s.setId(service.getId());
		s.setName(service.getName());
//		s.setUsers(users);
		
		subscribeRepository.save(s);
	}

	@RequestMapping(method=RequestMethod.POST, value="/subscribeServices")
	public void userSubscribeService(@RequestBody Subscribe service) {
		System.out.println("new service subscribe request details" + service);
		Subscribe s = new Subscribe();
		s.setId(service.getId());
//		s.setName(service.getName());
		User u = new User();
		service.getUsers()
		.forEach(s1 -> u.setId(s1.getId()));
		
		Set<User> users = new HashSet<>();
		users.add(u);
		s.setUsers(users);
		
		subscribeRepository.save(s);
	}
	

	@RequestMapping(method=RequestMethod.POST, value="/users")
	public void addUser(@RequestBody User user) {
		System.out.println("new user request details: " + user.getUsername() + " -- " + user.getPassword() + " --- " + user.getSubscribes());
		User u = new User();
//		u.setId(user.getId());
		u.setUsername(user.getUsername());
		u.setPassword(user.getPassword());
//		u.setUsers(users);
		
		userRepository.save(u);
	}
	
	

	@RequestMapping("/users")
	public List<User> userList() {
		List<User> users = new ArrayList<>();
		userRepository.findAll()
//		.forEach(users::add);
		.forEach(user -> {
			User u = new User();
			u.setId(user.getId());
			u.setUsername(user.getUsername());
			
			Set<Subscribe> subscribes = new HashSet<Subscribe>();
			user.getSubscribes().forEach(service -> {
				Subscribe s = new Subscribe();
				s.setId(service.getId());
				s.setName(service.getName());
				
				subscribes.add(s);
			});
			
			u.setSubscribes(subscribes);
			users.add(u);
		});
		return users;
	}
}
