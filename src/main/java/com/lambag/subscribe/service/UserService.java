package com.lambag.subscribe.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.lambag.subscribe.service.model.Subscribe;
import com.lambag.subscribe.service.model.User;
import com.lambag.subscribe.service.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User authenticateUser(User user) {
		User verifiedUser = userRepository.findByUsername(user.getUsername());
		if(verifiedUser.getPassword().equals(user.getPassword())) {
			return verifiedUser;
		}
		throw new BadCredentialsException("Invalid Credentials!!!");
	}
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}

	public void addUser(User user){
		userRepository.save(user);
	}

	public void deleteUser(Long id){
		userRepository.deleteById(id);
	}
	
	public void userSubscribeService(User user) {
		User userDetails = userRepository.getOne(user.getId());
		//new==========
		//not sure if it can append or overwrite subscriptions..need to check..maybe depends on how UI send it.userSubscribeService || userSubscribeServices
//		userDetails.setSubscribes(user.getSubscribes());
//		
//		userRepository.save(userDetails);
		
		//old==========
		//for now, only 1 subscription is being added
		Subscribe newSubscribtion = new Subscribe();
		
		user.getSubscribes()
			.forEach(u1 -> newSubscribtion.setId(u1.getId()));
		
		Set<Subscribe> alreadySubscribtions = userDetails.getSubscribes();
		alreadySubscribtions.add(newSubscribtion);
		userDetails.setSubscribes(alreadySubscribtions); 
		userRepository.save(userDetails);
	}

	public void userUnsubscribeService(User user, Long serviceId) {
		User userDetails = userRepository.getOne(user.getId());
		
		//old==========
		Set<Subscribe> subscribes = new HashSet<>();
		
		userDetails.getSubscribes()
			.forEach(s -> {
				//new==========
//				if(s.getId().equals(serviceId)) {
//					userDetails.getSubscribes().remove(s);
//				}
				//old==========
				if(!s.getId().equals(serviceId)) {
					subscribes.add(s);
				}
			});
		//old==========
		userDetails.setSubscribes(subscribes);
		
		userRepository.save(userDetails);
	}

}
