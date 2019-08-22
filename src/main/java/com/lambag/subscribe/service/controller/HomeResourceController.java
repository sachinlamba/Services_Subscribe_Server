package com.lambag.subscribe.service.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
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

	@RequestMapping(method=RequestMethod.DELETE , value="/allServices/{id}")
	public void deleteService(@PathVariable Long id) {
		subscribeRepository.deleteById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/userSubscribeServices")
	public void userSubscribeService(@RequestBody User user) {
		System.out.println("new service subscribe request details" + user);
		User userDetails = userRepository.getOne(user.getId());
		
		Subscribe newSubscribtion = new Subscribe();
		user.getSubscribes()
		.forEach(u1 -> newSubscribtion.setId(u1.getId()));
		
		Set<Subscribe> alreadySubscribtions = userDetails.getSubscribes();
		alreadySubscribtions.add(newSubscribtion);
		userDetails.setSubscribes(alreadySubscribtions);
		
		userRepository.save(userDetails);
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

	@RequestMapping(method=RequestMethod.DELETE , value="/users/{id}")
	public void deleteUser(@PathVariable Long id) {
		userRepository.deleteById(id);
	}
	
	
	
}
