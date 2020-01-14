package com.app.pojos;

import javax.persistence.*;

@Entity
@Table(name = "user_login")
public class UserLogin 
{
      private Integer loginId;
	  private String userEmail,userPassword;
	  private UserRole role;
	  private UserRegistration selectedUserId;
	  
   public UserLogin() 
   {
	 System.out.println("in login ctor");
   }
		public UserLogin(String userEmail, String userPassword, UserRole role) {
			super();
			this.userEmail = userEmail;
			this.userPassword = userPassword;
			this.role = role;
		}
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		public Integer getLoginId() {
			return loginId;
		}
		public void setLoginId(Integer loginId) {
			this.loginId = loginId;
		}
		
		@Column(name = "user_email",length = 20,nullable=false)
		public String getUserEmail() {
			return userEmail;
		}
		public void setUserEmail(String userEmail) {
			this.userEmail = userEmail;
		}
		
		@Column(name = "user_password",length = 20,nullable = false)
		public String getUserPassword() {
			return userPassword;
		}
		public void setUserPassword(String userPassword) {
			this.userPassword = userPassword;
		}
		
		@Enumerated(EnumType.STRING)
		@Column(name = "role",length=20,nullable = false)
		public UserRole getRole() {
			return role;
		}
		public void setRole(UserRole role) {
			this.role = role;
		}
		
		@OneToOne
		@JoinColumn(name = "user_id")
		public UserRegistration getSelectedUserId() {
			return selectedUserId;
		}
		public void setSelectedUserId(UserRegistration selectedUserId) {
			this.selectedUserId = selectedUserId;
		}
		@Override
		public String toString() {
			return "UserLogin [userEmail=" + userEmail + ", userPassword=" + userPassword + ", role=" + role
					+ ", selectedUserId=" + selectedUserId + "]";
		}

    
}
