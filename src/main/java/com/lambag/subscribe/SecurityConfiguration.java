package com.lambag.subscribe;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.inMemoryAuthentication()
			.withUser("test")
			.password("test")
			.roles("USER")
			.and()
			.withUser("admin")
			.password("admin")
			.roles("ADMIN");
	}
	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}
	@Override
    protected void configure(HttpSecurity http) throws Exception {
		
		http
		.httpBasic()
        .and()
			.authorizeRequests()
//			.antMatchers("/").permitAll()
//			.antMatchers("/h2_console/**").permitAll();
			.antMatchers("/static/**").permitAll()
			.antMatchers("/api/allServices").permitAll()
			.antMatchers("/api/authenticate").permitAll()
			.antMatchers(HttpMethod.POST, "/api/allServices").hasRole("ADMIN")
			.anyRequest().authenticated();
		
		
		//Don't use this configuration in a production environment
//        http.authorizeRequests()
//                .antMatchers("/").permitAll()
//                .antMatchers("/h2_console/**").permitAll();

        http.csrf().disable();
        http.headers().frameOptions().disable();
    }
}
