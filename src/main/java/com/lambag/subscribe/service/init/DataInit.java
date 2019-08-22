package com.lambag.subscribe.service.init;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.lambag.subscribe.service.dao.SubscribeDAO;
import com.lambag.subscribe.service.dao.UserDAO;
import com.lambag.subscribe.service.model.Subscribe;
import com.lambag.subscribe.service.model.User;

@Component
public class DataInit implements ApplicationRunner {
	private UserDAO userDAO;
	private SubscribeDAO subscribeDAO;
	
	@Autowired
	public DataInit(UserDAO userDAO, SubscribeDAO subscribeDAO) {
		this.userDAO = userDAO;
		this.subscribeDAO = subscribeDAO;
	}
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		long userCount = userDAO.count();
		long subscribeCount = subscribeDAO.count();
		
		Subscribe s1 = new Subscribe();
        s1.setName("BroadBand");
        Subscribe s2 = new Subscribe();
        s2.setName("LandLine");
        Subscribe s3 = new Subscribe();
        s3.setName("Cellular Services");
        Subscribe s4 = new Subscribe();
        s4.setName("Home D2H");
        
		User u1 = new User();
        u1.setUsername("one");
        u1.setPassword("one");
        User u2 = new User();
        u2.setUsername("two");
        u2.setPassword("two");
        

		if(subscribeCount == 0) {
//			Set<User> users1 = new HashSet<User>();
//			users1.add(u1);
//			
//			s1.setUsers(users1);
//			
//			Set<User> users2 = new HashSet<User>();
//			users2.add(u1);
//			users2.add(u2);
//			
//			s1.setUsers(users2);
			
            subscribeDAO.save(s1);
            subscribeDAO.save(s2);
            subscribeDAO.save(s3);
            subscribeDAO.save(s4);
		}
		
		if(userCount == 0) {
			Set<Subscribe> subscribes1 = new HashSet<Subscribe>();
			subscribes1.add(s1);
			
			u1.setSubscribes(subscribes1);
			
			Set<Subscribe> subscribes2 = new HashSet<Subscribe>();
			subscribes2.add(s1);
			subscribes2.add(s2);
			
            u2.setSubscribes(subscribes2);
 
            userDAO.save(u1);
            userDAO.save(u2);
		}

		
		
	}
	
	
}
