package com.lambag.subscribe.service.model;

import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "SUBSCRIBE")
public class Subscribe {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	
//	@ManyToMany(mappedBy = "subscribes", fetch = FetchType.LAZY)
//	private Set<User> users;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	public Set<User> getUsers() {
//		return users;
//	}
//
//	public void setUsers(Set<User> users) {
//		this.users = users;
//	}
	
	
}
