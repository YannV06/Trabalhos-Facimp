public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Pessoa p1=new Pessoa();
		p1.setNome("Jullyano");
		p1.setIdade(19);
		
		ContaBanco c1=new ContaBanco();
		c1.setTitular(p1.getNome());
		c1.setnumeroConta(56);
		c1.setSaldo(0);
		c1.exibirInfo();
		c1.depositar(1000);
		c1.exibirInfo();
		
	}

}
