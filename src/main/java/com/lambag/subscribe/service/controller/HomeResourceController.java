package com.lambag.subscribe.service.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lambag.subscribe.service.SubscribeService;
import com.lambag.subscribe.service.UserService;
import com.lambag.subscribe.service.model.Subscribe;
import com.lambag.subscribe.service.model.User;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class HomeResourceController {
	@Autowired
	private SubscribeService subscribeService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/home")
	public String home() {
		return ("<h1>Welcome to SpringBoot API service</h1>");
	}
	
	@RequestMapping(value = "/username", method = RequestMethod.GET)
	public String currentUserName(Principal principal) {
	   return principal.getName();
//	   //https://dzone.com/articles/how-to-get-current-logged-in-username-in-spring-se
//	   Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//	   if (principal instanceof UserDetails) {
//	     String username = ((UserDetails)principal).getUsername();
//	   } else {
//	     String username = principal.toString();
//	   }
	}
	
	@RequestMapping("/allServices")
	public List<Subscribe> subscribeList() {
		return subscribeService.getAllSubscribeServices();
	}

	@RequestMapping(method=RequestMethod.POST, value="/allServices")
	public void allService(@RequestBody Subscribe service) {
		subscribeService.addSubscribe(service);
	}

	@RequestMapping(method=RequestMethod.DELETE , value="/allServices/{id}")
	public void deleteService(@PathVariable Long id) {
		subscribeService.deleteSubscribe(id);
	}
	
	@RequestMapping("/users")
	public List<User> userList() {
		return userService.getAllUsers();
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/users")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}

	@RequestMapping(method=RequestMethod.DELETE , value="/users/{id}")
	public void deleteUser(@PathVariable Long id) {
		userService.deleteUser(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/authenticate")
	public User authenticateUser(@RequestBody User user) {
		return userService.authenticateUser(user);
	}

	@RequestMapping(method=RequestMethod.POST, value="/userSubscribeServices")
	public void userSubscribeService(@RequestBody User user) {
		userService.userSubscribeService(user);
	}

	@RequestMapping(method=RequestMethod.DELETE, value="/userSubscribeServices/{id}")
	public void userUnsubscribeService(@RequestBody User user, @PathVariable Long id) {
		userService.userUnsubscribeService(user, id);
	}
}
